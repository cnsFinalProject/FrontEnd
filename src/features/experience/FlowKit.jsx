import { Pressable, Text, TextInput, View } from "react-native";
import Svg, { Path, Rect, Circle } from "react-native-svg";
import { colors } from "../../ui/colors";
import s from "./experience.styles";
export { s };
export const won = (n) => Number(n || 0).toLocaleString("ko-KR") + "원";
export const dateLabel = (day) => day?.replaceAll("-", ".") ?? "—";
export function Icon({ name, size = 20, color = colors.ink }) {
  const paths = {
    back: "M15 5l-7 7 7 7",
    next: "M9 5l7 7-7 7",
    home: "M3 11l9-8 9 8M5 9v12h5v-7h4v7h5V9",
    bell: "M5 17h14l-2-3V9a5 5 0 0 0-10 0v5l-2 3M10 21h4",
    calendar: "M4 5h16v16H4zM4 10h16M8 3v5M16 3v5",
    doc: "M6 3h9l4 4v14H6zM14 3v6h5M9 13h7M9 17h5",
    check: "M5 12l4 4L19 6",
    user: "M4 21a8 8 0 0 1 16 0M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
    clock: "M12 8v5l3 2M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20",
    bank: "M3 8l9-5 9 5H3M5 11v7M10 11v7M15 11v7M20 11v7M3 21h18",
    plus: "M12 5v14M5 12h14",
    link: "M10 14l4-4M8 16l-1 1a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0M16 8l1-1a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0",
  };
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d={paths[name] ?? paths.doc}
        stroke={color}
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
export function Txt({ children, style, ...props }) {
  return (
    <Text {...props} style={[s.text, style]}>
      {children}
    </Text>
  );
}
export function Page({ title, back, children, step, subtitle, action }) {
  return (
    <View style={s.page}>
      {title && (
        <View style={s.pageHeader}>
          {back ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="뒤로"
              onPress={back}
              style={s.iconButton}
            >
              <Icon name="back" />
            </Pressable>
          ) : (
            <View style={s.iconButton} />
          )}
          <Txt style={s.headerTitle}>{title}</Txt>
          {action ?? <View style={s.iconButton} />}
        </View>
      )}
      {step && <Steps active={step} />}
      <View style={s.pageBody}>
        {subtitle && <Txt style={s.eyebrow}>{subtitle}</Txt>}
        {children}
      </View>
    </View>
  );
}
export function Title({ children, description }) {
  return (
    <View style={s.titleBlock}>
      <Txt accessibilityRole="header" style={s.title}>
        {children}
      </Txt>
      {description && <Txt style={s.description}>{description}</Txt>}
    </View>
  );
}
export function Card({ title, children, soft = false, style }) {
  return (
    <View style={[s.card, soft && s.softCard, style]}>
      {title && <Txt style={s.cardTitle}>{title}</Txt>}
      {children}
    </View>
  );
}
export function Row({ label, value, children }) {
  return (
    <View style={s.row}>
      <Txt style={s.rowLabel}>{label}</Txt>
      {children ?? <Txt style={s.rowValue}>{value}</Txt>}
    </View>
  );
}
export function Button({
  title,
  onPress,
  secondary = false,
  disabled = false,
  danger = false,
  icon,
  small = false,
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{
        disabled,
      }}
      disabled={disabled}
      onPress={(event) => {
        event.stopPropagation?.();
        onPress?.();
      }}
      style={({ pressed }) => [
        s.button,
        secondary && s.secondaryButton,
        danger && s.dangerButton,
        small && s.smallButton,
        disabled && s.disabled,
        pressed && s.pressed,
      ]}
    >
      {icon && (
        <Icon name={icon} color={secondary ? colors.action : colors.surface} />
      )}
      <Txt style={[s.buttonText, secondary && s.secondaryButtonText]}>
        {title}
      </Txt>
    </Pressable>
  );
}
export function Link({ children, onPress, icon = "next", muted = false }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={(event) => {
        event.stopPropagation?.();
        onPress?.();
      }}
      style={s.link}
    >
      <Txt style={[s.linkText, muted && s.muted]}>{children}</Txt>
      {icon && <Icon name={icon} size={17} color={colors.action} />}
    </Pressable>
  );
}
export function Badge({ children, warning = false }) {
  return (
    <View style={[s.badge, warning && s.warningBadge]}>
      <Txt style={[s.badgeText, warning && s.warningText]}>{children}</Txt>
    </View>
  );
}
export function Note({ children, warning = false }) {
  return (
    <View style={[s.note, warning && s.warningNote]}>
      <Icon
        name={warning ? "bell" : "check"}
        size={17}
        color={warning ? "#9A5B24" : colors.action}
      />
      <Txt style={s.noteText}>{children}</Txt>
    </View>
  );
}
export function Field({
  label,
  value,
  onChangeText,
  numeric = false,
  multiline = false,
  editable = true,
  hint,
}) {
  return (
    <View style={s.field}>
      {label && <Txt style={s.fieldLabel}>{label}</Txt>}
      <TextInput
        accessibilityLabel={label}
        value={String(value ?? "")}
        onChangeText={onChangeText}
        keyboardType={numeric ? "number-pad" : "default"}
        multiline={multiline}
        editable={editable}
        placeholderTextColor={colors.muted}
        style={[s.input, multiline && s.multiline, !editable && s.lockedInput]}
      />
      {hint && <Txt style={s.small}>{hint}</Txt>}
    </View>
  );
}
export function Choice({
  label,
  selected,
  onPress,
  description,
  disabled = false,
}) {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{
        checked: selected,
        disabled,
      }}
      disabled={disabled}
      onPress={(event) => {
        event.stopPropagation?.();
        onPress?.();
      }}
      style={[s.choice, selected && s.selectedChoice, disabled && s.disabled]}
    >
      <View style={[s.radio, selected && s.radioOn]}>
        {selected && <View style={s.radioDot} />}
      </View>
      <View style={s.grow}>
        <Txt style={s.choiceText}>{label}</Txt>
        {description && <Txt style={s.small}>{description}</Txt>}
      </View>
    </Pressable>
  );
}
export function Toggle({ label, value, onChange, description }) {
  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityLabel={label}
      accessibilityState={{
        checked: value,
      }}
      onPress={() => onChange(!value)}
      style={s.toggleRow}
    >
      <View style={s.grow}>
        <Txt style={s.choiceText}>{label}</Txt>
        {description && <Txt style={s.small}>{description}</Txt>}
      </View>
      <View style={[s.switch, value && s.switchOn]}>
        <View style={[s.switchThumb, value && s.switchThumbOn]} />
      </View>
    </Pressable>
  );
}
export function Steps({ active }) {
  return (
    <View style={s.steps}>
      {["연결", "협상", "서명", "송금"].map((label, i) => (
        <View key={label} style={[s.step, i + 1 === active && s.stepActive]}>
          <Txt style={[s.stepText, i + 1 === active && s.stepTextActive]}>
            {i + 1 < active ? "✓" : i + 1} {label}
          </Txt>
        </View>
      ))}
    </View>
  );
}
export function Money({ amount, label }) {
  return (
    <View style={s.moneyBlock}>
      {label && <Txt style={s.muted}>{label}</Txt>}
      <Txt style={s.money}>{won(amount)}</Txt>
    </View>
  );
}
export function Schedule({ rows, onPress }) {
  return (
    <View style={s.schedule}>
      {rows.map((row) => (
        <Pressable
          key={row.id ?? row.number}
          accessibilityRole={onPress ? "button" : undefined}
          onPress={onPress ? () => onPress(row) : undefined}
          disabled={!onPress}
          style={s.scheduleRow}
        >
          <View style={s.grow}>
            <Txt style={s.strong}>
              {row.number}회차 · {dateLabel(row.due)}
            </Txt>
            {row.paid !== undefined && (
              <Txt style={s.small}>
                {row.remaining === 0
                  ? "갚음 · 확인됨"
                  : row.paid
                    ? `${won(row.paid)} 반영 · ${won(row.remaining)} 남음`
                    : "예정"}
              </Txt>
            )}
          </View>
          <Txt style={s.strong}>{won(row.amount)}</Txt>
          {onPress && <Icon name="next" size={15} />}
        </Pressable>
      ))}
    </View>
  );
}
export function Empty({ title, description, children }) {
  return (
    <Card soft>
      <Icon name="doc" size={30} />
      <Txt style={s.cardTitle}>{title}</Txt>
      <Txt style={s.description}>{description}</Txt>
      {children}
    </Card>
  );
}
export function MockQr() {
  return (
    <View accessibilityLabel="연결 시연용 QR 이미지" style={s.qr}>
      <Svg width={190} height={190} viewBox="0 0 25 25">
        <Rect width={25} height={25} fill="white" />
        {[0, 1, 2].map((i) => {
          const x = i === 1 ? 17 : 1,
            y = i === 2 ? 17 : 1;
          return (
            <Path
              key={i}
              d={`M${x} ${y}h7v7h-7z M${x + 2} ${y + 2}h3v3h-3z`}
              fill={colors.ink}
              fillRule="evenodd"
            />
          );
        })}
        {Array.from(
          {
            length: 120,
          },
          (_, i) => {
            const x = ((i * 7 + 9) % 23) + 1,
              y = ((i * 11 + 5) % 23) + 1;
            if ((x < 9 && y < 9) || (x > 16 && y < 9) || (x < 9 && y > 16))
              return null;
            return (
              <Rect
                key={i}
                x={x}
                y={y}
                width={1}
                height={1}
                fill={colors.ink}
              />
            );
          },
        )}
      </Svg>
      <Txt style={s.small}>QR 스캔 시연</Txt>
    </View>
  );
}
